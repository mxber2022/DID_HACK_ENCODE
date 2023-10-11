1. Give user vc(verifiable cred).
2. Only user having vc can request money
3. and invoice is generated.




maharajababu onyx-ssi-sdk-examples % npm run create:sign:vc

> @jpmorganchase/onyx-ssi-sdk-examples@0.0.1 create:sign:vc
> ts-node ./src/issuer/create-and-sign-vc.ts


Config param 'REGISTRY_CONTRACT_ADDRESS' missing


Config param 'ISSUER_EDDSA_PRIVATE_KEY' missing


Keys.json not found


Generating and saving private key for ISSUER_EDDSA_PRIVATE_KEY


Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples directory


Config param 'ISSUER_ES256K_PRIVATE_KEY' missing


Keys.json found


Private key for ISSUER_ES256K_PRIVATE_KEY not found


Generating new private key for ISSUER_ES256K_PRIVATE_KEY


Config param 'HOLDER_EDDSA_PRIVATE_KEY' missing


Keys.json found


Private key for HOLDER_EDDSA_PRIVATE_KEY not found


Generating new private key for HOLDER_EDDSA_PRIVATE_KEY


Saving private key for HOLDER_EDDSA_PRIVATE_KEY


Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples directory


Config param 'HOLDER_ES256K_PRIVATE_KEY' missing


Keys.json found


Private key for HOLDER_ES256K_PRIVATE_KEY not found


Generating new private key for HOLDER_ES256K_PRIVATE_KEY


Config param 'VC_SCHEMA_URL' missing


Config param 'VC_DIR_PATH' missing


Config param 'VC' missing


Config param 'VC_ES256K_PRIVATE_KEY' missing


Config param 'VP_DIR_PATH' missing


Config param 'VP' missing


Saving private key for ISSUER_ES256K_PRIVATE_KEY


Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples directory


Saving private key for HOLDER_ES256K_PRIVATE_KEY


Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples directory


Generating a signed verifiable Credential of type PROOF_OF_NAME

eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUFJPT0ZfT0ZfTkFNRSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiSmVzc2llIERvZSJ9fSwic3ViIjoiZGlkOmtleTp6Nk1rb3ZGUTV1Q1dUTEUzRnlqUDVTdkRuU3RHMzRKNlF5UUVZbktzSmdrSDJUWEoiLCJqdGkiOiJkaWQ6a2V5Ono2TWtxbVVUQXhnSDF5cDY0OWFyZnZyV2c2TWI5NE5wdjEzeDVlUUFEbmVLZEpTMiIsIm5iZiI6MTY5NzAyMzg2MiwiaXNzIjoiZGlkOmtleTp6Nk1ramVpbW9MNzI2eWZGcnlOSGsxUzI3THp3eG1UTlJhQkFkdlRWd0ZFWUR0eGcifQ.b4MUIB9t_GJGpYyrr3dN02u9gD0PE0mQX73e2G6rJTQyXXJbdvYaEi1K1RdIClt6OAp45O2_XRNaZgTpNE65DQ

Saving signed VC JWT


Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples/src/verifiable_credentials directory













//holder

npm run create:sign:vp

> @jpmorganchase/onyx-ssi-sdk-examples@0.0.1 create:sign:vp
> ts-node ./src/holder/create-and-sign-vp.ts


Config param 'REGISTRY_CONTRACT_ADDRESS' missing


Config param 'ISSUER_EDDSA_PRIVATE_KEY' missing


Keys.json found


Private keys for ISSUER_EDDSA_PRIVATE_KEY found


Config param 'ISSUER_ES256K_PRIVATE_KEY' missing


Keys.json found


Private keys for ISSUER_ES256K_PRIVATE_KEY found


Config param 'HOLDER_EDDSA_PRIVATE_KEY' missing


Keys.json found


Private keys for HOLDER_EDDSA_PRIVATE_KEY found


Config param 'HOLDER_ES256K_PRIVATE_KEY' missing


Keys.json found


Private keys for HOLDER_ES256K_PRIVATE_KEY found


Config param 'VC_SCHEMA_URL' missing


Config param 'VC_DIR_PATH' missing


Config param 'VC_ES256K_PRIVATE_KEY' missing


Config param 'VP_DIR_PATH' missing


Config param 'VP' missing


Reading an existing signed VC JWT

eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUFJPT0ZfT0ZfTkFNRSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiSmVzc2llIERvZSJ9fSwic3ViIjoiZGlkOmtleTp6Nk1rb3ZGUTV1Q1dUTEUzRnlqUDVTdkRuU3RHMzRKNlF5UUVZbktzSmdrSDJUWEoiLCJqdGkiOiJkaWQ6a2V5Ono2TWtxbVVUQXhnSDF5cDY0OWFyZnZyV2c2TWI5NE5wdjEzeDVlUUFEbmVLZEpTMiIsIm5iZiI6MTY5NzAyMzg2MiwiaXNzIjoiZGlkOmtleTp6Nk1ramVpbW9MNzI2eWZGcnlOSGsxUzI3THp3eG1UTlJhQkFkdlRWd0ZFWUR0eGcifQ.b4MUIB9t_GJGpYyrr3dN02u9gD0PE0mQX73e2G6rJTQyXXJbdvYaEi1K1RdIClt6OAp45O2_XRNaZgTpNE65DQ

Geting User from VC

did:key:z6MkovFQ5uCWTLE3FyjP5SvDnStG34J6QyQEYnKsJgkH2TXJ

VC did method: did:key


Creating and signing the VP from VC

eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2cCI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwidmVyaWZpYWJsZUNyZWRlbnRpYWwiOlsiZXlKaGJHY2lPaUpGWkVSVFFTSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjJZeUk2ZXlKQVkyOXVkR1Y0ZENJNld5Sm9kSFJ3Y3pvdkwzZDNkeTUzTXk1dmNtY3ZNakF4T0M5amNtVmtaVzUwYVdGc2N5OTJNU0pkTENKMGVYQmxJanBiSWxabGNtbG1hV0ZpYkdWRGNtVmtaVzUwYVdGc0lpd2lVRkpQVDBaZlQwWmZUa0ZOUlNKZExDSmpjbVZrWlc1MGFXRnNVM1ZpYW1WamRDSTZleUp1WVcxbElqb2lTbVZ6YzJsbElFUnZaU0o5ZlN3aWMzVmlJam9pWkdsa09tdGxlVHA2TmsxcmIzWkdVVFYxUTFkVVRFVXpSbmxxVURWVGRrUnVVM1JITXpSS05sRjVVVVZaYmt0elNtZHJTREpVV0VvaUxDSnFkR2tpT2lKa2FXUTZhMlY1T25vMlRXdHhiVlZVUVhoblNERjVjRFkwT1dGeVpuWnlWMmMyVFdJNU5FNXdkakV6ZURWbFVVRkVibVZMWkVwVE1pSXNJbTVpWmlJNk1UWTVOekF5TXpnMk1pd2lhWE56SWpvaVpHbGtPbXRsZVRwNk5rMXJhbVZwYlc5TU56STJlV1pHY25sT1NHc3hVekkzVEhwM2VHMVVUbEpoUWtGa2RsUldkMFpGV1VSMGVHY2lmUS5iNE1VSUI5dF9HSkdwWXlycjNkTjAydTlnRDBQRTBtUVg3M2UyRzZySlRReVhYSmJkdllhRWkxSzFSZElDbHQ2T0FwNDVPMl9YUk5hWmdUcE5FNjVEUSJdfSwiaXNzIjoiZGlkOmtleTp6Nk1rb3ZGUTV1Q1dUTEUzRnlqUDVTdkRuU3RHMzRKNlF5UUVZbktzSmdrSDJUWEoifQ.V0Y0VNQzxOfOfJO_P_tBY22fMiIdQ9Pzw97ciJ4SNFXi5FYQU4b16YQjEqGoMI4B1mQGPk77PHKCCGb-8LTPBQ

Saving the document under /Users/maharajababu/Documents/Projects/DID_HACK_ENCODE/onyx-ssi-sdk-examples/src/verifiable_presentation directory