class Fedex {
    calculate(item) {
        return 1
    }
}

class UPS {
    calculate(item) {
        return 2
    }
}


class USPS {
    calculate(item) {
        return 3
    }
}



class Shipping {
    company

    setStrategy(company) {
        this.company = company
    }

    calculate(item) {
        return this.company.calculate(item)
    }
}


const fedex = new Fedex()
const ups = new UPS()
const usps = new USPS()

const item = { from: 'Alabama', to: "Georgia", weight: 1.45 }

const shipping = new Shipping()
shipping.setStrategy(ups)
console.log("Fedex" + shipping.calculate(item));