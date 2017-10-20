@app
claims-thingo

@html
get /
get /register
get /login
post /register
post /login
post /claims

@json
get /api
get /api/claims

@tables
accounts
  accountID *String

claims
  accountID *String
  claimID **String

#@indexes
#accounts
#  email *String
