export declare function isCloudinaryConfigured(): boolean;
export declare function uploadDocumentFile(input: {
    buffer: Buffer;
    folder: string;
    filename: string;
    mimeType: string;
}): Promise<{
    publicId: string;
    fileUrl: string;
    resourceType: string;
    bytes: number;
}>;
export declare function uploadPublicImage(input: {
    buffer: Buffer;
    organizationId: string;
    filename: string;
    mimeType: string;
}): Promise<{
    publicId: string;
    fileUrl: string;
}>;
export declare function uploadCareerResume(input: {
    buffer: Buffer;
    organizationId: string;
    filename: string;
    mimeType: string;
}): Promise<{
    publicId: string;
    fileUrl: string;
    fileName: string;
}>;
export declare function signedDocumentUrl(publicId: string, resourceType: string, expiresInSeconds?: number): {
    url: string;
    expiresAt: string;
};
export declare function destroyDocumentFile(publicId: string, resourceType: string): Promise<void>;
