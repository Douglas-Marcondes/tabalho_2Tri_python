print("Digite os dados do histórico:")

id_historico = 1
id_denuncia = input("ID da denúncia: ")
status_antigo = input("Status antigo: ")
status_novo = input("Status novo: ")
data = input("Data (ex: 22/11/2023 14:30): ")
id_usuario = input("ID do usuário: ")
motivo = input("Motivo: ")

print("\nHistórico cadastrado:")
print("ID:", id_historico)
print("Denúncia:", id_denuncia)
print("Mudou de", status_antigo, "para", status_novo)
print("Data:", data)
print("Usuário:", id_usuario)
print("Motivo:", motivo)
