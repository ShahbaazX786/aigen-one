import ImageKit, { toFile } from '@imagekit/nodejs';

let _client: InstanceType<typeof ImageKit> | null = null;

export const getClient = () => {
    if (!_client) {
        _client = new ImageKit({
            privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        })
    }

    return _client;
}


export const uploadBufferToImageKit = async (params: {
    buffer: Buffer; fileName: string; folder: string; mimeType: string;
}) => {

    const client = getClient();
    const file = await toFile(params.buffer, params.fileName, { type: params.mimeType });

    const result = await client.files.upload({
        file, fileName: params.fileName, folder: params.folder, useUniqueFileName: true
    })


    return { url: result.url!, fileId: result.fileId }
}