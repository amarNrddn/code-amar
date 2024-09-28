import { useMemo } from "react"

const useFormatDate = (dateString) => {
   const formatDate = useMemo(() => {
      if (!dateString) return

      const date = new Date(dateString)

      const options = { year: 'numeric', month: 'long', day: '2-digit' }
      return new Intl.DateTimeFormat('id-ID', options).format(date)
   }, [dateString])

   return formatDate
}

export default useFormatDate