import { useEffect, useState } from 'react'
import { getBook } from '../../services/Books/getBooks'
export const useGetBook = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [book, setBook] = useState([])
  const getAllUsers = async () => {
    const newBooks = await getBook()
    setBook(newBooks)
    setIsLoading(false)
  }
  useEffect(() => {
    getAllUsers()
  }, [])
  return {
    book,
    isLoading,
  }
}
