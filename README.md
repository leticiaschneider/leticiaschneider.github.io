# 🚀 Building My Portfolio in One Day with Gatsby and Tailwind CSS

I decided to build my portfolio in just one day using Gatsby and Tailwind CSS. Gatsby gave me speed and flexibility, while Tailwind made styling quick and easy, without overcomplicating things. If you’re looking to build a clean and responsive portfolio fast, here’s how I did it.


<br>

## Prerequisites
First things first, make sure you have Node.js installed. If you haven’t set it up yet, download the latest version from the [Node.js official website](https://nodejs.org/en).

<br>

### **Step 1: Install Gatsby CLI**
Gatsby's CLI is the tool we’ll use to quickly create and manage our project. Install it globally by running the following command:

```
npm install -g gatsby-cli
```

<br>

### **Step 2: Create a New Gatsby Project**
With the CLI installed, let’s create our Gatsby project. Run the following command in your terminal:

```
gatsby new my-portfolio
```
> [!NOTE]
> Replace _my-portfolio_ with your desired project name. This command will set up a basic Gatsby site that we’ll customize into a personal portfolio.

<br>

### **Step 3: Start the Development Server**
Move into your project folder:
```
cd my-portfolio
```
Then, start the development server with:
```
gatsby develop
```

Visit `http://localhost:8000` in your browser to see your new site live.

<hr>

### **Step 4: Set Up Tailwind CSS**
To style the portfolio, I used Tailwind CSS, a utility-first CSS framework that makes designing beautiful interfaces a breeze. Here’s how you can set it up in your Gatsby project:

1. **Install Tailwind and PostCSS:**

   Run the following command to add Tailwind and the necessary PostCSS plugins:

    ```
    npm install tailwindcss postcss autoprefixer
    ```

2. **Generate Tailwind Configuration Files:**

   Create the Tailwind configuration files by running:
   
    ```
    npx tailwindcss init -p
    ```

    This will generate two files: `tailwind.config.js` and `postcss.config.js`.

   
3. **Configure Tailwind:**

   Open the `tailwind.config.js` file and set the `content` array to include Gatsby’s default file paths:
   
    ```
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

4. **Add Tailwind to Your CSS:**

   Open your main CSS file, usually located at `src/styles/global.css`, and add the Tailwind directives:
   
    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

5. **Import the CSS File:**

   Make sure to import this CSS file in your **gatsby-browser.js** file, like this:
   
    ```
    import "./src/styles/global.css";
    ```

<hr>

### **Step 5: Customize and Build Your Portfolio**
Now that Tailwind is set up, you can start designing your portfolio using Tailwind’s utility classes. Customize your site by editing the components in the `src` folder, and don’t forget to make it personal with your own projects, blogs, and contact details.

When you’re ready to deploy your portfolio, build the site with:

```
gatsby build
```
Deploy the contents of the `public` folder to any static hosting provider, such as Netlify or Vercel.

<br>

Feel free to experiment with different layouts, plugins, and styles to make your portfolio stand out. You can check out my portfolio live at http://leticiaschneider.github.io. Happy coding! 🚀
