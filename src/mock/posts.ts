export const posts = [
  {
    id: 1,
    author: {
      name: 'Diego Almeida',
      avatarUrl: 'https://github.com/dyhalmeida.png',
      role: 'Frontend Developer'
    },
    contents: [
      { type: 'paragraph', content: 'Salve galera!' },
      { type: 'paragraph', content: 'Olha só esse artigo que explica muito bem como o chat GPT pode aumentar a produtividade dos devs.' },
      { type: 'link', content: 'https://www.google.com/search?q=chat+GPT' }
    ],
    publishedAt: new Date('2023-01-20 15:04:00')
  },
  {
    id: 2,
    author: {
      name: 'Mayara Rocha',
      avatarUrl: 'https://github.com/mayrochinha.png',
      role: 'Web Design'
    },
    contents: [
      { type: 'paragraph', content: 'Bom dia povo lindo 🌞' },
      { type: 'paragraph', content: 'Ontem postei esse tutorial ensinando como editar suas fotos no photoshop e deixa-lás super profissionais, dêem uma olhada e compartilhe se gostarem, thanks!' },
      { type: 'link', content: 'https://www.google.com/search?q=photoshop' }
    ],
    publishedAt: new Date('2023-01-25 10:06:45')
  }
]