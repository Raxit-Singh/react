import React, { useEffect, useState } from 'react'

const AutoComplete = () => {

    const [error, setError] = useState(null)
    const[user,setUser] = useState('')
    const[loading, setLoading] = useState(false)

    async function fetchUser(){
        try {
            setLoading(true)
            const response = await fetch("https://dummyjson.com/users")
            const data = await response.json()
            if(data && data.users){
                setUser(data.users.map(userName=> userName.firstName))
            }
            setLoading(false)
        } catch (error) {
            setError(error.message)
            setLoading(false)
        }
    }
    
    useEffect(()=> {
        fetchUser()
    })

  return (
    <div>
        <div>
            <input type='text' placeholder='Write user name...'/>
        </div>
    </div>
  )
}

export default AutoComplete