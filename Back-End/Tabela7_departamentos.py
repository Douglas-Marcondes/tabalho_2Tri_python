departamentos = []

while True:
    print("\nNovo Departamento (digite 'sair' para encerrar):")
    nome = input("Nome: ")
    if nome.lower() == 'sair':
        break
    
    departamentos.append({
        'id': len(departamentos)+1,
        'nome': nome,
        'descricao': input("Descrição: "),
        'responsavel': input("Responsável ID: "),
        'email': input("E-mail: "),
        'telefone': input("Telefone: ")
    })

print("\nDepartamentos cadastrados:")
for d in departamentos:
    print(f"\nID {d['id']}: {d['nome']}")
    print(f"Contato: {d['email']} | Tel: {d['telefone']}")
