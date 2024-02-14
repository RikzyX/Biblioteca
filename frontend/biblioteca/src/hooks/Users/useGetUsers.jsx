import { getUsers } from '../../services/Users/getUsers'
import { useEffect, useState } from 'react'
export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState([])
  const getAllUsers = async () => {
    const newUsers = await getUsers()
    setUser(newUsers)
    setIsLoading(false)
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return {
    user,
    isLoading,
  }
}
