function User({ users }) {
  if (users.isLoggedIn) {
    return <div className="bg-amber-200 text-red-700 decoration-slate-500 rounded-lg p-4">Ласкаво просимо, {users.name}</div>;
  }
  return <button  type="button" class="text-white bg-green-500 hover:bg-green-800
   focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm 
   px-5 py-2.5 text-center inline-flex items-center dark:bg-green-600
    dark:hover:bg-green-700 dark:focus:ring-green-800">
  Ваш аватар
  <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg>
  </button>
}

export default User; 
// onClick={alert("М'ячмен")}