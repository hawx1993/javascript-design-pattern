import * as Compose from "./Compose"
// @ponicode
describe("Compose.compose", () => {
    test("0", () => {
        let param1: any = [() => 16, () => 64, () => 0, () => 10, () => 256]
        let callFunction: any = () => {
            Compose.compose(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let param1: any = [() => 64, () => 64]
        let callFunction: any = () => {
            Compose.compose(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let param1: any = [() => 64, () => 256]
        let callFunction: any = () => {
            Compose.compose(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let param1: any = [() => 10, () => 10, () => 32]
        let callFunction: any = () => {
            Compose.compose(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let param1: any = [() => 16, () => 32, () => 16, () => 10, () => 256]
        let callFunction: any = () => {
            Compose.compose(param1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            Compose.compose([])
        }
    
        expect(callFunction).not.toThrow()
    })
})
