# API: Express + DB 

#### Instalando dependencias de Node📚
```
npm install
```
#### Dependencias necesarias para el proyecto
```
npm install express --save-dev
npm install prisma --save-dev
```

#### Inicializa prisma
`npx prisma init`

#### Crea una base de datos en Postgresql🗂
`npx prisma init`

#### Modifica el archivo .env con tu usuario y contraseña
```
DATABASE_URL="postgresql://TUUSUARIO:PASSWORD@localhost:5432/explorers_api?schema=public"
```

#### en el archivo `prisma/schema.prisma` agrega los modelos de las tablas que necesites, nosotros usaremos tres modelos

```
model Explorer {
  id Int @id @default(autoincrement())
  name String @unique
  username String @db.VarChar(255)
  mission String @db.VarChar(255)
  azureCertification Boolean @default(false)
  dateCreated DateTime @default(now())
  lastUpdated DateTime @updatedAt
}
model Student{
  id   Int   @id @default(autoincrement())
  name   String @unique
  lang   String
  missionCommander   String
  enrollments   Int
  hasCertification   Boolean   @default(false)  
}
model missionCommander{
  id   Int   @id @default(autoincrement())
  name   String @unique
  username   String
  mainStack   String
  currentEnrollment   Boolean   @default(false)
  hasAzureCertification   Boolean   @default(false)
}
```

#### Para crear los modelos nos basamos en las siguiente tablas
`student`
| Campo | Tipo de Dato |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| lang | String |
| missionCommander | String |
| enrollments | Integer |
| hasCertification | Boolean |

`missionCommander`
| Campo | Tipo |
|---|---|
| id | Integer (autogenerado) |
| name | String |
| username | String |
| mainStack | String |
| currentEnrollment | Boolean |
| hasAzureCertification | Boolean |
#### Versionando los cambios a la base de datos, a esto se le llama hacer un `migratios`

```
npx prisma migrate dev --name init
```

#### Se crearon las tres tablas que necesitabamos en nuestra DB

#### En un archivo `prisma/seed.js` agregamos algunos registros a las tablas como te muestro aqui como ejemplo

```
const mc1 = await prisma.missionCommander.upsert({
        where: { id: 11 },
        update: {},
        create: {
          name: 'Carlo Gilmar',
                  username: 'CarloG',
                  mainStack: 'Elixir',
                  currentEnrollment: true,
                  hasAzureCertification:true
        },
      });
const student4 = await prisma.student.upsert({
        where: { id: 6 },
        update: {},
        create: {
          name: 'Student4',
                  lang: 'Frances',
                  missionCommander: 'Carlo',
                  enrollments: 7,
                  hasCertification: true 
        },
      });
```

#### Se creó un CRUD en el archivo server.js
- Endpoints GET para las tablas
- Endpoints POST
- Endponst PUT
- Endpoints DELETE

#### Todos los endpoints se probaron con POSTMAN✅

Puedes descargar los archivos de POSTMAN para que los pruebes: [client-launchX.zip](https://github.com/UlisesOrnelasR/PrismaDB/files/8766621/client-launchX.zip)
Te dejo algunas capturas de pantalla...
![p3](https://user-images.githubusercontent.com/99143567/170145666-c5ffe8cb-c78b-40c1-a6f1-1b9eb1615ca4.JPG)
![p2](https://user-images.githubusercontent.com/99143567/170145806-392ee494-3cc8-43e5-a0cf-934e7ab48c26.JPG)
![p1](https://user-images.githubusercontent.com/99143567/170145816-d4b57dc2-0e08-4ee0-8774-47f0c2e2ec72.JPG)

#### Esto fue la creación de una API de express, que conectamos a una base de datos Postgresql, a contrinuación la conectamos a una app de VUE 
## [Cliente Servidor](https://github.com/UlisesOrnelasR/client-launchx)
#### Comming soon
-Test
-Estilo de codigo como Airbnb
