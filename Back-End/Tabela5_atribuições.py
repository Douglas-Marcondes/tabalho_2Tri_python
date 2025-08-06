atribuicoes = []

print("=== SISTEMA DE ATRIBUIÇÃO DE DENÚNCIAS ===")

while True:
    print("\nDigite os dados da atribuição (ou 'sair' para encerrar):")

    denuncia_id = input("ID da Denúncia: ")
    if denuncia_id.lower() == 'sair':
        break
    
    funcionario_id = input("ID do Funcionário: ")
    data_atribuicao = input("Data de Atribuição (AAAA-MM-DD HH:MM): ")
    data_estimada = input("Data Estimada para Conclusão (AAAA-MM-DD HH:MM): ")
    status = input("Status (Pendente/Em Andamento/Concluído): ")

    attribute_id = len(atribuicoes) + 1

    atribuicoes.append({
        'attribute_id': attribute_id,
        'denuncia_id': denuncia_id,
        'funcionario_id': funcionario_id,
        'data_atribuicao': data_atribuicao,
        'data_conclusao_estimada': data_estimada,
        'status': status
    })

    print(f"\n✅ Atribuição {attribute_id} cadastrada com sucesso!")

print("\n=== ATRIBUIÇÕES REGISTRADAS ===")
for atrib in atribuicoes:
    print(f"\nID Atribuição: {atrib['attribute_id']}")
    print(f"Denúncia ID: {atrib['denuncia_id']} | Funcionário ID: {atrib['funcionario_id']}")
    print(f"Atribuído em: {atrib['data_atribuicao']}")
    print(f"Conclusão estimada: {atrib['data_conclusao_estimada']}")
    print(f"Status: {atrib['status']}")
