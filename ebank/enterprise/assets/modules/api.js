class Api {
  request(method, name, data) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.responseType = 'json'
      xhr.open(method, name)
      xhr.addEventListener('loadend', () => {
        if (xhr.status == 200) {
          resolve(xhr.response)
        } else {
          reject(xhr.response)
        }
      })
      if (data) {
        let formData = new FormData()
        for (let key in data) {
          formData.append(key, data[key])
        }
        xhr.send(formData)
      } else {
        xhr.send()
      }
    })
  }

  login(account, password) {
    return this.request('POST', '/login', {
      account: account,
      password: password,
    })
  }

  register(data) {
    return this.request('POST', '/register', data)
  }

  getVerificationCode(mobile) {
    return this.request('GET', '/get_verification_code/' + mobile)
  }

  saveBudgetTable(data) {
    return this.request('POST', '/save_budget_table', {
      data: JSON.stringify(data),
    })
  }

  getBudgetTable() {
    return this.request('GET', '/get_budget_table').then((data) => JSON.parse(data))
  }
}

const api = new Api()
export default api