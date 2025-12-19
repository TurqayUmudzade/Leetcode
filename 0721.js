var accountsMerge = function (accounts) {

    accounts.sort((a, b) => a[1].localeCompare(b[1]))


    return accounts
};


function merge(a, b) {
    for (let i = 0; i < a.length; i++) {
        a[i];

    }
}

let accounts = [["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["John", "johnsmith@mail.com", "john00@mail.com"], ["Mary", "mary@mail.com"], ["John", "johnnybravo@mail.com"]]
console.log(accountsMerge(accounts));