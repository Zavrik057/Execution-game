
export const getColor = (status: string) => {
   if (status === 'checked') {
      return { color: 'black' }
   } else {
      return { color: 'red' }
   }
}