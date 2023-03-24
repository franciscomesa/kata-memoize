class FibonacciGenerator {
    cache: number[] = []

    existsInMemoize(position: number) {
        return this.cache[position] != undefined
    }

    private getMemoize(position: number) {
        return this.cache[position]
    }

    private saveToMemoize(position: number, result: number) {
        this.cache[position] = result
    }

    generateNumberAtPosition(position: number): number {
        if (position === 1)
            return 0
        if (position === 2)
            return 1
        return this.memoize(position - 1) + this.memoize(position - 2)
    }

    memoize(position: number) {
        if (this.existsInMemoize(position)) {
            return this.getMemoize(position)
        }
        let result = this.generateNumberAtPosition(position)
        this.saveToMemoize(position, result)
        return result
    }
}

const testCases = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368];
describe('Fibonacci recursivily should per position', () => {
    const fibonacciGenerator = new FibonacciGenerator()
    let index = 1

    beforeAll(() => {
        index = 1
    })

    it.each(
        testCases
    )

    ('At position %#', (value) => {
        const result = fibonacciGenerator.generateNumberAtPosition(index)
        index = index + 1

        expect(result).toBe(value)
    })
})

class FibonacciGeneratorIterative {
    generateNumberAtPosition(position: number) {
        if (position == 1)
            return 0
        if (position == 2)
            return 1
        let previous = 0;
        let current = 1;
        let newValue;
        for (let i = 2; i < position; i++) {
            newValue = current + previous
            previous = current
            current = newValue
        }
        return current
    }
}

describe('Fibonacci iterative should per position', () => {
    const fibonacciGenerator = new FibonacciGeneratorIterative()
    let index = 1

    beforeAll(() => {
        index = 1
    })

    it.each(
        testCases
    )

    ('At position %#', (value) => {
        const result = fibonacciGenerator.generateNumberAtPosition(index)
        index = index + 1

        expect(result).toBe(value)
    })
})

describe("test que no es un test", () => {
    it("recursive", () => {
        const fibonacciGenerator = new FibonacciGenerator()
        for (let i = 1; i < 5000; i++) {
            console.log(fibonacciGenerator.generateNumberAtPosition(i))
        }
    })
    it("iterative", () => {
        const fibonacciGenerator = new FibonacciGeneratorIterative()
        for (let i = 1; i < 120; i++) {
            console.log(fibonacciGenerator.generateNumberAtPosition(i))
        }
    })
})
