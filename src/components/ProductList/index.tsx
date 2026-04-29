import { useState } from 'react'
import { Product } from '../Product'
import { Container, Modal, ModalContent, ModalInfos, CloseIcon } from './styles'

import { Prato } from '../../models'

type Props = {
  pratos: Prato[]
}

export const ProductList = ({ pratos }: Props) => {
  const [pratoSelecionado, setPratoSelecionado] = useState<Prato | null>(null)

  const fecharModal = () => {
    setPratoSelecionado(null)
  }

  return (
    <>
      <Container>
        {pratos.map((prato) => (
          <Product
            key={prato.id}
            foto={prato.foto}
            nome={prato.nome}
            descricao={prato.descricao}
            onClick={() => setPratoSelecionado(prato)}
          />
        ))}
      </Container>
      {pratoSelecionado && (
        <Modal className="overlay" onClick={fecharModal}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <CloseIcon onClick={fecharModal}></CloseIcon>
            <img src={pratoSelecionado.foto} alt={pratoSelecionado.nome} />
            <ModalInfos>
              <h4>{pratoSelecionado.nome}</h4>
              <p>{pratoSelecionado.descricao}</p>
              <p>Serve: {pratoSelecionado.porcao}</p>
              <button>
                Adicionar ao carrinho -{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(pratoSelecionado.preco)}
              </button>
            </ModalInfos>
          </ModalContent>
        </Modal>
      )}
    </>
  )
}
