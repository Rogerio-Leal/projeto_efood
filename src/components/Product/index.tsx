import { Card, Imagem, Titulo, Descricao, BotaoAdicionar } from './styles'

type Props = {
  foto: string
  nome: string
  descricao: string
}

export const Product = ({ foto, nome, descricao }: Props) => (
  <Card>
    <Imagem src={foto} alt={nome} />
    <Titulo>{nome}</Titulo>
    <Descricao>{descricao}</Descricao>
    <BotaoAdicionar>Adicionar ao carrinho</BotaoAdicionar>
  </Card>
)
