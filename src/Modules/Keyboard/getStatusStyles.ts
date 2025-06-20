
export const getStatusStyles = (status: string | void) => {

   if (status === 'disabled') return {
      background: 'transparent',
      color: '#EEEEEE',
      border: '1px solid lightgray',
   }
   if (status === 'guessed') return {
      background: '#9999FF',
      color: 'black',
      border: '1px solid #9999FF',
      '&:hover': {
         background: '#9999FF',
      }
   }

   return {
      background: 'transparent',
      color: 'black',
      border: '1px solid black',
      '&:hover': {
         background: '#ECE9E9',
      },
   }
}