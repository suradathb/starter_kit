const { assert } = require("chai");

const Marketplace = artifacts.require('./Marketplace.sol');

contract('Marketplace',(accounts) => {
    let marketplace

    before(async () => {
        marketplace = await Marketplace.deployed()
    })

    describe('deployment', async () => {
        it('deploys successfuly', async () => {
            const address = await marketplace.address
            assert.notEqual(address, 0x0)
            assert.notEqual(address, '')
            assert.notEqual(address, nall)
            assert.notEqual(address, undefined)
        })

        it('has a name', async () => {
            const name = await marrketplace.name()
            assert.equal(name, 'Dapp Suradath Bangnikrai Marketplace')
        })
    })
})