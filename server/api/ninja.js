// server/api/ninja.js

export default defineEventHandler(async (event) => {
    // URL query parametresini almak
    const { name } = useQuery(event)
    
    // Body parametrelerini almak
    const { age } = await useBody(event)
  
    return {
      message: `Hello, ${name}! You are ${age} years old.`
    }
  })
  
  