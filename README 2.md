# Biodiversidad

Hito 4

https://biodiversidad7.onrender.com/ 

Build Command: cd Backend && npm install && npm run build
Publish directory: dist

DATABASE_URL=postgres://postgres:1581@localhost:5432/biodiversidad

DB_USER=postgres
DB_PASSWORD=1581
DB_HOST=localhost
DB_PORT=5432
DB_NAME=biodiversidad

Scripts para que funcione Babel con Build
{
  "scripts": {
    "dev": "babel-node --watch src/server.js",
    "build": "babel src --out-dir build --copy-files",
    "start": "npm run build && node build/server.js",
    "test": "jest"
  }
}


…or create a new repository on the command line
echo "# biodiversidad10" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/KatherineStehberg/biodiversidad10.git
git push -u origin main


…or push an existing repository from the command line
git remote add origin https://github.com/KatherineStehberg/biodiversidad10.git
git branch -M main
git push -u origin main