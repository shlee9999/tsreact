import { FC } from 'react'
import { Root } from './styled'

type AppProps = {
  className?: string
}

export const App: FC<AppProps> = ({ className }) => {
  return <Root className={className}>Hello</Root>
}
