

# RF - Regras Funcionais

## Autenticação e Conta do Usuário
- [x] O usuário pode se registrar na plataforma.
- [x] O usuário pode fazer login na plataforma.
- [x] O usuário pode visualizar e editar seu perfil.
- [x] Deve ser possível obter o perfil de um usuário logado.
- [ ] O usuário pode recuperar a senha da sua conta.
- [x] Deve ser possível obter o número de check-ins realizados pelo usuário logado.
- [x] Deve ser possível o usuário obter o seu histórico de check-ins.
- [x] Deve ser possível o usuário buscar academias próximas (até 100km).
- [x] Deve ser possível o usuário buscar academias pelo nome.
- [x] Deve ser possível o usuário realizar check-in em uma academia/treinador.
- [x] Deve ser possível validar o check-in de um usuário.
- [x] Deve ser possível cadastrar uma academia/Trainador.

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
- [x] O usuário não deve poder se cadastrar com um e-mail duplicado.
- [x] O usuário não pode fazer 2 check-ins no mesmo dia.
- [x] O usuário não pode fazer check-in se não estiver perto (100m) da academia.
- [x] O check-in só pode ser validado até 20 minutos após ser criado.
- [ ] O check-in só pode ser validado por administradores(Professor ou Academia).
- [ ] A academia só pode ser cadastrada por administradores/Professores;

# RNF - Regras Não Funcionais

## Desempenho
- [ ] A API deve oferecer tempos de resposta rápidos para garantir uma boa experiência do usuário.
- [ ] A API deve ser capaz de lidar com um grande número de usuários simultâneos durante eventos ou promoções especiais.

## Segurança e Autorização
- [ ] Implementar HTTPS para garantir a segurança das comunicações.
- [x] Estabelecer lógica de autorização para garantir que apenas usuários autenticados acessem determinados recursos.
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL.
- [x]  Todas listas de dados precisam estar paginadas com 20 itens por página.
- [x] As senhas dos usuários devem ser armazenadas de forma segura, utilizando técnicas de hash e sal.
- [x] O usuário deve ser identificado por um JWT (JSON Web Token).

## Notificações
- [ ] Integrar sistema de notificações para alertar usuários sobre novas mensagens, aulas agendadas, etc.

## Documentação
- [x] Criar documentação detalhada da API, incluindo endpoints, parâmetros, e exemplos de uso.

## Escalabilidade
- [x] A arquitetura da API deve ser escalável para lidar com o crescimento futuro do número de usuários e conteúdos.

🌟🥋#bjiuj #JiuJitsuRevolution #TreinePersonalizado #ComunidadeBJJ #AprendaJunto🚀🤙

# Functional Requirements

## Authentication and User Account
- [x] Users can register on the platform.
- [x] Users can log in to the platform.
- [x] Users can view and edit their profiles.
- [x] It should be possible to obtain the profile of a logged-in user.
- [ ] Users can recover the password for their account.
- [x] It should be possible to obtain the number of check-ins performed by the logged-in user.
- [x] Users can view their check-in history.
- [x] Users can search for nearby gyms (up to 100km).
- [x] Users can search for gyms by name.
- [x] Users can check in at a gym/trainer.
- [x] It should be possible to validate the check-in of a user.
- [x] It should be possible to register a gym/Trainer.

## Profiles
- [ ] Users can view the profiles of other users.
- [ ] Users can view the profiles of Jiu-Jitsu teachers.
- [ ] Users can view the profiles of gyms.

## Connections
- [ ] Users can follow other users.
- [ ] Users can follow Jiu-Jitsu teachers.
- [ ] Users can follow Jiu-Jitsu gyms.

## Private Lessons and Scheduling
- [ ] Allow teachers to offer private lessons, defining availability.
- [ ] Create endpoints for scheduling lessons between users and teachers.
- [ ] Implement a notification system for reminders of scheduled lessons.

## Graduation Certification
- [ ] Implement a system for teachers to assign grades to students.
- [ ] Create endpoints for students to view their own grades.

## Team Membership
- [ ] Establish logic for each athlete to belong to an exclusive team.
- [ ] Create endpoints for teachers to manage teams and associated athletes.

## Attendance and Activity Calendar
- [ ] Develop functionality to create events and classes on the calendar.
- [ ] Create endpoints for teachers, gyms, and athletes to view their calendars.

# Business Rules

## Interactions
- [ ] Users can create posts about their experiences or achievements in Jiu-Jitsu training.
- [ ] Gyms can post information about events or special classes.
- [ ] Teachers can post tips on techniques and strategies.

## Restrictions
- [x] Only authenticated users can create posts.
- [x] Gyms can only be registered by authenticated users as owners or legal representatives.
- [x] Users should not be able to register with a duplicate email.
- [x] Users cannot check in twice on the same day.
- [x] Users cannot check in if they are not close (100m) to the gym.
- [x] Check-in can only be validated up to 20 minutes after it is created.
- [ ] Check-in can only be validated by administrators (Teacher or Gym).
- [ ] Gyms can only be registered by administrators/Teachers.

# Non-Functional Requirements

## Performance
- [ ] The API must offer fast response times to ensure a good user experience.
- [ ] The API must be able to handle a large number of simultaneous users during special events or promotions.

## Security and Authorization
- [ ] Implement HTTPS to ensure the security of communications.
- [x] Establish authorization logic to ensure that only authenticated users access certain resources.
- [x] Application data needs to be persisted in a PostgreSQL database.
- [x] All data lists need to be paginated with 20 items per page.
- [x] User passwords must be stored securely using hash and salt techniques.
- [x] The user must be identified by a JWT (JSON Web Token).

## Notifications
- [ ] Integrate a notification system to alert users about new messages, scheduled lessons, etc.

## Documentation
- [x] Create detailed documentation of the API, including endpoints, parameters, and usage examples.

## Scalability
- [x] The architecture of the API must be scalable to handle the future growth of the number of users and content.

🌟🥋#bjiuj #JiuJitsuRevolution #PersonalizedTraining #BJJCommunity #LearnTogether 🚀🤙
