const isLoggedIn = localStorage.getItem('adminLoggedIn') === 'true'

if (!isLoggedIn) {
  return <AdminLogin />
}

return <AdminCRUD />