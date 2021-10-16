const rewire = require("rewire")
const fetchAPI = rewire("./fetchAPI")
const buildUrl = fetchAPI.__get__("buildUrl")
const buildHeaders = fetchAPI.__get__("buildHeaders")
const handleErrors = fetchAPI.__get__("handleErrors")
// @ponicode
describe("buildUrl", () => {
    test("0", () => {
        let callFunction = () => {
            buildUrl("v1/accounts", { key: "elio@example.com" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            buildUrl("v1/accounts", { key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            buildUrl("/api/v1/remotes/push/register", { key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            buildUrl("network/dns_host", { key: "Dillenberg" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            buildUrl("network/dns_host", { key: "Elio" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            buildUrl(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("buildHeaders", () => {
    test("0", () => {
        let callFunction = () => {
            buildHeaders()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("handleErrors", () => {
    test("0", () => {
        let callFunction = () => {
            handleErrors({ json: () => "\"{\"x\":5,\"y\":6}\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            handleErrors({ json: () => "\"\"2006-01-02T14:04:05.000Z\"\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            handleErrors({ json: () => "\"{\"x\":[10,null,null,null]}\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            handleErrors({ json: () => "\"[3,\"false\",false]\"" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            handleErrors(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
