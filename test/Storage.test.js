//install mocha and chai - https://mochajs.org/ - https://www.chaijs.com/
//npm install --save mocha
//npm i chai chai-as-promised -- save , $ npm install chai --save

const { assert } = require('chai')

//multiple describe and it functions can also mark as only for them only to execure. eg, describe.only("", ()=>{})

const Storage = artifacts.require('./Storage.sol')

require('chai') //mocha framework provides chai package
	.use(require('chai-as-promised'))
	.should()


contract('Storage', (accounts)=>{

    let contract

    before(async()=>{
        contract = await Storage.deployed();
    })

    describe('deployment', async()=>{

        it('deployes successfully', async ()=>{
			const address = contract.address
			console.log(address)
			assert.notEqual(address,0x0)
			assert.notEqual(address,'')
			assert.notEqual(address,null)
			assert.notEqual(address,undefined)
		})

        it('store function', async()=>{
            await contract.store(3);
            var result= await contract.retrieve();
            assert.equal(3, result)

        })


    })


})