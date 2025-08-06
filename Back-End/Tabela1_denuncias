denuncias = []

def registrar_denuncia():
    print("\n--- REGISTRAR DENÚNCIA ---")
    titulo = input("Título do problema: ")
    descricao = input("Descrição: ")
    local = input("Local (rua/bairro): ")
    
    nova_denuncia = {
        "titulo": titulo,
        "descricao": descricao,
        "local": local,
        "status": "Pendente"
    }
    
    denuncias.append(nova_denuncia)
    print("\n✅ Denúncia registrada com sucesso!")

def listar_denuncias():
    print("\n--- DENÚNCIAS REGISTRADAS ---")
    if not denuncias:
        print("Nenhuma denúncia cadastrada.")
    else:
        for i, denuncia in enumerate(denuncias, 1):
            print(f"\nDenúncia #{i}")
            print(f"Título: {denuncia['titulo']}")
            print(f"Local: {denuncia['local']}")
            print(f"Status: {denuncia['status']}")

def menu():
    while True:
        print("\n=== SISTEMA DE DENÚNCIAS ===")
        print("1. Registrar nova denúncia")
        print("2. Ver denúncias")
        print("3. Sair")
        
        opcao = input("Escolha uma opção: ")
        
        if opcao == "1":
            registrar_denuncia()
        elif opcao == "2":
            listar_denuncias()
        elif opcao == "3":
            print("Saindo do sistema...")
            break
        else:
            print("Opção inválida!")

# Inicia o sistema
menu()
