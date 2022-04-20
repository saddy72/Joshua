self.__uv$config = {
    prefix: '/service/',
    bare: '/bare/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/scripts/uv/uv.handler.js',
    bundle: '/scripts/uv/uv.bundle.js',
    config: '/scripts/uv/uv.config.js',
    sw: '/scripts/uv/uv.sw.js',
};