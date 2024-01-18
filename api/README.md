

# RF - Regras Funcionais

## Autenticação e Conta do Usuário
- [ ] O usuário pode se registrar na plataforma.
- [ ] O usuário pode fazer login na plataforma.
- [ ] O usuário pode visualizar e editar seu perfil.
- [ ] O usuário pode recuperar a senha da sua conta.
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado.
- [ ] Deve ser possível o usuário obter o seu histórico de check-ins.
- [ ] Deve ser possível o usuário buscar academias próximas (até 10km).
- [ ] Deve ser possível o usuário buscar academias pelo nome.
- [ ] Deve ser possível o usuário realizar check-in em uma academia.
- [ ] Deve ser possível validar o check-in de um usuário.
- [ ] Deve ser possível cadastrar uma academia.

## Perfis
- [ ] O usuário pode visualizar o perfil de outros usuários.
- [ ] O usuário pode visualizar o perfil de professores de Jiu-Jitsu.
- [ ] O usuário pode visualizar o perfil de academias.

## Conexões
- [ ] O usuário pode seguir outros usuários.
- [ ] O usuário pode seguir professores de Jiu-Jitsu.
- [ ] O usuário pode seguir academias de Jiu-Jitsu.

## Aulas Particulares e Agendamento
- [ ] Permitir que professores ofereçam aulas particulares, definindo disponibilidade.
- [ ] Criar endpoints para agendamento de aulas entre usuários e professores.
- [ ] Implementar sistema de notificação para lembretes de aulas agendadas.

## Certificação de Graduação
- [ ] Implementar sistema para professores atribuírem graduações aos alunos.
- [ ] Criar endpoints para alunos visualizarem suas próprias graduações.

## Pertencimento a Equipes
- [ ] Estabelecer lógica para cada atleta pertencer a uma equipe exclusiva.
- [ ] Criar endpoints para professores gerenciarem equipes e atletas associados.

## Calendário de Presenças e Atividades
- [ ] Desenvolver funcionalidade para criar eventos e aulas no calendário.
- [ ] Criar endpoints para professores, academias e atletas visualizarem seus calendários.


# RN - Regras de Negócios

## Interações
- [ ] Os usuários podem criar posts sobre suas experiências ou conquistas em treinos de Jiu-Jitsu.
- [ ] As academias podem postar informações sobre eventos ou aulas especiais.
- [ ] Professores podem postar dicas de técnicas e estratégias.

## Restrições
- [ ] Apenas usuários autenticados podem criar posts.
- [ ] As academias só podem ser cadastradas por usuários autenticados como proprietários ou representantes legais.
- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado.
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia.
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia.
- [ ] O check-in só pode ser validado até 20 minutos após ser criado.
- [ ] O check-in só pode ser validado por administradores(Professor ou Academia).
- [ ] A academia só pode ser cadastrada por administradores/Professores;

# RNF - Regras Não Funcionais

## Desempenho
- [ ] A API deve oferecer tempos de resposta rápidos para garantir uma boa experiência do usuário.
- [ ] A API deve ser capaz de lidar com um grande número de usuários simultâneos durante eventos ou promoções especiais.

## Segurança e Autorização
- [ ] Implementar HTTPS para garantir a segurança das comunicações.
- [ ] Estabelecer lógica de autorização para garantir que apenas usuários autenticados acessem determinados recursos.
- [ ] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL.
- [ ]  Todas listas de dados precisam estar paginadas com 20 itens por página.
- [ ] As senhas dos usuários devem ser armazenadas de forma segura, utilizando técnicas de hash e sal.
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token).

## Notificações
- [ ] Integrar sistema de notificações para alertar usuários sobre novas mensagens, aulas agendadas, etc.

## Documentação
- [ ] Criar documentação detalhada da API, incluindo endpoints, parâmetros, e exemplos de uso.

## Escalabilidade
- [ ] A arquitetura da API deve ser escalável para lidar com o crescimento futuro do número de usuários e conteúdos.

🌟🥋#bjiuj #JiuJitsuRevolution #TreinePersonalizado #ComunidadeBJJ #AprendaJunto🚀🤙
