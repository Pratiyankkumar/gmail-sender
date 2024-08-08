let credentialsObject = {}
const credentials = (userGmail, userPass) => {
  return credentialsObject = {
    userGmail,
    userPass
  }
}

console.log(credentials('pratiyank49@gmail.com', 'pal1234@'))
console.log(credentialsObject.userGmail);