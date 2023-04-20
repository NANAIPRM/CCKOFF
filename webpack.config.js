// IMPORT : COMMON JS
module.exports = {
        entry: {
        main:'./src/index.js',
        vendor:'./src/vendor.js'
    },
    
    //LOADER
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            }
         
        ]
    },  
};

