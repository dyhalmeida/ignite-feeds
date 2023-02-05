import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

export const publishedDateFormatted = (publishedAt: Date) => {
  return format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", { locale: ptBR })
}

export const publishedDateRelativeToNow = (publishedAt: Date) => {
  return formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })
}