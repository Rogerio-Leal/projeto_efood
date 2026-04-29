import { Card, Imagem, Titulo, Descricao, BotaoAdicionar } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
  onClick: () => void
}

export const Product = ({ foto, nome, descricao, onClick }: Props) => (
  <Card>
    <Imagem src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar onClick={onClick}>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)
