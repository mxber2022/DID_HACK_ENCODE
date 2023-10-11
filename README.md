# B2B Fake Invoice Payment Prevention using Verifiable Credentials

## Introduction(Problem)

This repository provides a solution to combat B2B fake invoice payment fraud by leveraging Verifiable Credentials. B2B invoice fraud is a prevalent problem where businesses fall victim to fraudulent invoices, resulting in financial losses. Verifiable Credentials offer a secure and tamper-proof way to verify the authenticity of invoices, suppliers, and payment details.

## Solution 

Suppose business A wants to send payment invoice to business B. <br/>

Business B issues verifiable credentials to Business A.<br/>

Once VC is issued to business A, it verifies the VC issued.<br/>

Once verification is successful business A is allowd to generate payment invoice.<br/>

### What Are Verifiable Credentials?

Verifiable Credentials are digital attestations that represent statements made by an issuer about a subject. In our context, these credentials are used to confirm the authenticity of invoices and the legitimacy of suppliers, thereby reducing the risk of fraudulent payments.

## How It Works

1. **Credential Issuance**: The supplier or service provider issues a Verifiable Credential that contains details about the invoice, the products or services delivered, and the payment request.

2. **Verification**: The receiving business, as the verifier, checks the validity of the Verifiable Credential. This can be done by verifying the digital signature of the issuer and ensuring it was issued using a trusted and secure system.

3. **Invoice Validation**: The verifier validates the invoice details against the information in the Verifiable Credential. Any discrepancies can be flagged for further investigation.

4. **Payment Authorization**: Payment is authorized only after successful verification and validation of the Verifiable Credential. This helps prevent payments for fake invoices.

5. **Blockchain Integration (Optional)**: For added security, this system can be integrated with a blockchain to store and timestamp Verifiable Credentials. This enhances the audit trail and ensures the immutability of records.

## Getting Started

To use this system for B2B invoice payment prevention with Verifiable Credentials, follow these steps:

1. **Clone the Repository**: Begin by cloning this repository to your local machine.

2. **Set Up the Environment**: Ensure you have the necessary tools and libraries to run the system. Instructions for environment setup can be found in the documentation.

3. **Generate Verifiable Credentials**: Use the provided scripts to generate Verifiable Credentials for your invoices and payment requests.

4. **Verify and Validate**: Implement the verification and validation process within your business operations. Ensure that your suppliers are aware of the Verifiable Credential issuance process.

5. **Optional Blockchain Integration**: If you choose to integrate with a blockchain, follow the blockchain-specific setup and configuration instructions.

6. **Prevent Fake Invoice Payments**: By consistently using Verifiable Credentials, your business can significantly reduce the risk of falling victim to B2B fake invoice payment fraud.

## Documentation

For detailed documentation on how to use this system, please refer to the [Wiki](wiki/).

## Contributing

We welcome contributions from the open-source community. Feel free to fork this repository, make improvements, and submit a pull request. Please follow our [Contribution Guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE).

## Disclaimer

This system provides an additional layer of security to prevent B2B fake invoice payment fraud but cannot guarantee absolute protection. It should be used as part of a comprehensive fraud prevention strategy.

---

By implementing this system, businesses can enhance their defenses against B2B fake invoice payment fraud and protect their financial interests. Verifiable Credentials offer a secure and transparent way to verify the authenticity of invoices and suppliers, reducing the risk of falling victim to fraudulent schemes.



Generating a signed verifiable Credential of type PROOF_OF_NAME

eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2YyI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVDcmVkZW50aWFsIiwiUFJPT0ZfT0ZfTkFNRSJdLCJjcmVkZW50aWFsU3ViamVjdCI6eyJuYW1lIjoiSmVzc2llIERvZSJ9fSwic3ViIjoiZGlkOmtleTp6Nk1rb3ZGUTV1Q1dUTEUzRnlqUDVTdkRuU3RHMzRKNlF5UUVZbktzSmdrSDJUWEoiLCJqdGkiOiJkaWQ6a2V5Ono2TWtxbVVUQXhnSDF5cDY0OWFyZnZyV2c2TWI5NE5wdjEzeDVlUUFEbmVLZEpTMiIsIm5iZiI6MTY5NzAyMzg2MiwiaXNzIjoiZGlkOmtleTp6Nk1ramVpbW9MNzI2eWZGcnlOSGsxUzI3THp3eG1UTlJhQkFkdlRWd0ZFWUR0eGcifQ.b4MUIB9t_GJGpYyrr3dN02u9gD0PE0mQX73e2G6rJTQyXXJbdvYaEi1K1RdIClt6OAp45O2_XRNaZgTpNE65DQ

Saving signed VC JWT

''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

Creating and signing the VP from VC

eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJ2cCI6eyJAY29udGV4dCI6WyJodHRwczovL3d3dy53My5vcmcvMjAxOC9jcmVkZW50aWFscy92MSJdLCJ0eXBlIjpbIlZlcmlmaWFibGVQcmVzZW50YXRpb24iXSwidmVyaWZpYWJsZUNyZWRlbnRpYWwiOlsiZXlKaGJHY2lPaUpGWkVSVFFTSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjJZeUk2ZXlKQVkyOXVkR1Y0ZENJNld5Sm9kSFJ3Y3pvdkwzZDNkeTUzTXk1dmNtY3ZNakF4T0M5amNtVmtaVzUwYVdGc2N5OTJNU0pkTENKMGVYQmxJanBiSWxabGNtbG1hV0ZpYkdWRGNtVmtaVzUwYVdGc0lpd2lVRkpQVDBaZlQwWmZUa0ZOUlNKZExDSmpjbVZrWlc1MGFXRnNVM1ZpYW1WamRDSTZleUp1WVcxbElqb2lTbVZ6YzJsbElFUnZaU0o5ZlN3aWMzVmlJam9pWkdsa09tdGxlVHA2TmsxcmIzWkdVVFYxUTFkVVRFVXpSbmxxVURWVGRrUnVVM1JITXpSS05sRjVVVVZaYmt0elNtZHJTREpVV0VvaUxDSnFkR2tpT2lKa2FXUTZhMlY1T25vMlRXdHhiVlZVUVhoblNERjVjRFkwT1dGeVpuWnlWMmMyVFdJNU5FNXdkakV6ZURWbFVVRkVibVZMWkVwVE1pSXNJbTVpWmlJNk1UWTVOekF5TXpnMk1pd2lhWE56SWpvaVpHbGtPbXRsZVRwNk5rMXJhbVZwYlc5TU56STJlV1pHY25sT1NHc3hVekkzVEhwM2VHMVVUbEpoUWtGa2RsUldkMFpGV1VSMGVHY2lmUS5iNE1VSUI5dF9HSkdwWXlycjNkTjAydTlnRDBQRTBtUVg3M2UyRzZySlRReVhYSmJkdllhRWkxSzFSZElDbHQ2T0FwNDVPMl9YUk5hWmdUcE5FNjVEUSJdfSwiaXNzIjoiZGlkOmtleTp6Nk1rb3ZGUTV1Q1dUTEUzRnlqUDVTdkRuU3RHMzRKNlF5UUVZbktzSmdrSDJUWEoifQ.V0Y0VNQzxOfOfJO_P_tBY22fMiIdQ9Pzw97ciJ4SNFXi5FYQU4b16YQjEqGoMI4B1mQGPk77PHKCCGb-8LTPBQ


