module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
module.exports = {  
  // ... autre configuration ...  
  content: [  
    "./src/**/*.{js,jsx,ts,tsx,html,css}",  
    "./src/components/**/*.{js,jsx,ts,tsx}",  
    "./public/index.html",  
  ],  
  theme: {  
    extend: {},  
  },  
  plugins: [],  
  static: {  
    images: [  
      {  
        src: "./public/images",  
        ttl: 31536000000, // 1 an  
      },  
    ],  
  },  
};
module.exports = {  
  // ... autres configurations ...  
  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env'],  
          },  
        },  
      },  
    ],  
  },  
  // ... autres configurations ...  
}
module.exports = {  
  presets: [  
    '@babel/preset-env',  
    '@babel/preset-react',  
  ],  
  plugins: [  
    '@babel/plugin-transform-classes',  
  ],  
};
module.exports = {  
  // ... autres configurations ...  
  module: {  
    rules: [  
      {  
        test: /\.js$/,  
        include: /node_modules\/chart\.js/,  
        use: {  
          loader: 'babel-loader',  
          options: {  
            presets: ['@babel/preset-env'],  
          },  
        },  
      },  
    ],  
  },  
};
module.exports = {  
  content: [  
    "./src/**/*.{html,js,jsx,ts,tsx}",  
  ],  
  theme: {  
    extend: {},  
  },  
  plugins: [],  
};