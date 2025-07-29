# Configuração do Firebase

## Variáveis de Ambiente Configuradas

O projeto foi configurado para usar as seguintes variáveis de ambiente do Firebase:

### Arquivo `.env`
```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyDrN53ml2EVks4irQ46NyatQYYeAUhnCN4
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=projeto-micronegocio.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=projeto-micronegocio
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=projeto-micronegocio.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=1089524937822
NEXT_PUBLIC_FIREBASE_APP_ID=1:1089524937822:web:20f1528b5b1de4a43f30cf
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-Y8Q8SEYFSH

# Firebase Admin SDK (para SSR)
FIREBASE_CLIENT_EMAIL=your-service-account-email@projeto-micronegocio.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

## Arquivos Modificados

### 1. `env.Configs.ts`
- Adicionada validação de variáveis de ambiente obrigatórias
- Logs de debug para desenvolvimento
- Carregamento automático das variáveis
- Validação das variáveis do Firebase Admin para SSR

### 2. `next.config.js`
- Adicionada seção `env` para garantir que as variáveis sejam expostas ao cliente
- Configuração para output standalone

### 3. `app/config/firebaseConfig.ts`
- Adicionados logs de debug para verificar se as configurações estão sendo carregadas
- Verificação de variáveis faltantes em desenvolvimento
- Configuração do Firebase Client (browser)

### 4. `app/config/firebaseAdmin.ts` (NOVO)
- Configuração do Firebase Admin SDK para SSR
- Inicialização apenas no lado do servidor
- Autenticação e Firestore para operações server-side

### 5. `app/config/firebase.ts` (NOVO)
- Configuração unificada do Firebase
- Exporta tanto cliente quanto servidor
- Função utilitária para obter a instância correta baseada no ambiente

### 6. `app/layout.tsx`
- Importação do arquivo `env.Configs.ts` para garantir carregamento das variáveis

### 7. `middleware.ts` (NOVO)
- Middleware para autenticação
- Redirecionamento baseado em tokens
- Proteção de rotas

### 8. `app/api/auth/verify/route.ts` (NOVO)
- API route para verificação de tokens usando Firebase Admin
- Exemplo de uso do SSR para autenticação

### 9. `app/components/ServerUserProfile.tsx` (NOVO)
- Server Component que usa Firebase Admin
- Exemplo de busca de dados no servidor

## Como Funciona

### Client-Side (Browser)
1. **Carregamento de Variáveis**: O arquivo `env.Configs.ts` carrega as variáveis do arquivo `.env`
2. **Validação**: Em desenvolvimento, verifica se todas as variáveis obrigatórias estão presentes
3. **Exposição**: O `next.config.js` expõe as variáveis `NEXT_PUBLIC_*` para o cliente
4. **Inicialização**: O Firebase é inicializado apenas no lado do cliente com as configurações carregadas

### Server-Side (SSR)
1. **Firebase Admin**: Usa o Firebase Admin SDK para operações no servidor
2. **Autenticação**: Verifica tokens JWT usando `adminAuth.verifyIdToken()`
3. **Firestore**: Acessa dados diretamente no servidor usando `adminDb`
4. **Server Components**: Permite renderização no servidor com dados do Firebase

## Uso

### No Cliente (Browser)
```typescript
import { auth, db } from '@/app/config/firebase';

// Autenticação
const user = auth.currentUser;

// Firestore
const docRef = doc(db, 'users', userId);
```

### No Servidor (SSR)
```typescript
import { adminAuth, adminDb } from '@/app/config/firebaseAdmin';

// Verificar token
const decodedToken = await adminAuth.verifyIdToken(token);

// Buscar dados
const userDoc = await adminDb.collection('users').doc(userId).get();
```

### Configuração Unificada
```typescript
import { getFirebase } from '@/app/config/firebase';

const firebase = getFirebase();
// Retorna firebaseClient no browser ou firebaseServer no servidor
```

## Verificação

Para verificar se tudo está funcionando:

1. Execute `npm run dev`
2. Abra o console do navegador
3. Você deve ver logs indicando que as variáveis foram carregadas corretamente
4. O Firebase deve inicializar sem erros
5. Teste as API routes que usam Firebase Admin

## Configuração do Firebase Admin

Para usar o SSR, você precisa:

1. **Criar uma Service Account** no Firebase Console
2. **Baixar a chave privada** (JSON)
3. **Adicionar as variáveis** `FIREBASE_CLIENT_EMAIL` e `FIREBASE_PRIVATE_KEY` ao `.env`

## Troubleshooting

Se houver problemas:

1. Verifique se o arquivo `.env` existe na raiz do projeto
2. Confirme que todas as variáveis estão presentes
3. Para SSR, verifique se as variáveis do Firebase Admin estão configuradas
4. Reinicie o servidor de desenvolvimento
5. Verifique os logs no console do navegador
6. Para o erro `auth/invalid-api-key`, verifique se a API key está correta no Firebase Console 