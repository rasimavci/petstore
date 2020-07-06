# CRUD test on test server
Sample Client for Petstore server. You can test CRUD operations.
Petstore sunucusu için basit bir istemci. CRUD işlemlerini test edebilirsiniz.
<p>
<img src="src/assets/img/logo.png"/>
</p>

**please install node.js if you have not yet**

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### How to use Async/Await with Axios in Vuejs ?

Here is a simple example to make a get request using Axios from our react component:
Just start with asyn keyword before your method name under methods.
This will must wrap the function itself as an async function.
Inside the function use a try catch block.

```javascript
    async getPetTest () {
      this.petData = { category: {} }
      this.status = ''
      try {
        let response = await axios.get(`/pet/${this.petIDTest}`)
        expect(response.status).to.equal(200)
        expect(response.statusText).to.equal('OK')
        expect(response.data.name).to.equal(this.petNameTest)
        expect(response.data.category.name).to.equal(this.petCategoryTest)
        this.petData = response.data
        this.statusText = response.statusText
        this.status = response.status
        console.log('response status ' + response.status)
      } catch (ex) {
        console.log(ex)
      }
    },
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# Vue + Webpack App Template

A full-featured Vue template with Webpack setup with hot-reload & css extraction used[Vue Webpack Boilerplate](https://github.com/pvtallulah/base-vue-f7v2-template)
