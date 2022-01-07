const fs = require('fs');
const http = require("http");
const Agent = require('agentkeepalive');
const FormData = require("form-data");

export class FileUploadService {

    public async upload(file, token): Promise<String> {

        return new Promise((resolve, reject) => {

            const keepaliveAgent = new Agent({
                maxSockets: 100,
                maxFreeSockets: 10,
                timeout: 60000,
                freeSocketTimeout: 30000,
                keepAlive: true
            });
                
            const fileStream = fs.createReadStream(file);
            console.log(`file readstream upload service  ${fileStream}`)
    
            const form = new FormData();
            form.append('loc', 'edge');
            form.append('files', fileStream);

            var headers = form.getHeaders();
            headers['Authorization'] = `Bearer ${token}`;
            
            var options = {
                host : process.env.FILE_UPLOAD_HOST,
                port : process.env.FILE_UPLOAD_PORT,
                path : process.env.FILE_UPLOAD_PATH,
                method : 'POST',
                headers : headers,
                agent: keepaliveAgent
            };

            var req = http.request(options, function(res) {
                res.on('data', function(chunk) {
                    var body = JSON.parse(chunk.toString());
                    console.log(`the body uploadservice ", ${body}`)
                    let url: String = body.data[0].url;
                    resolve(url);
                })
                
            });

            req.on('error', function(err) {
                reject(err)
            });

            form.pipe(req);


        });
        
    }

}
