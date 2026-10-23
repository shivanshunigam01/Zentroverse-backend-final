export declare function localUploadsRoot(): string;
export declare function publicFileUrl(storedName: string): string;
export declare function isSafeStoredFileName(value: string): boolean;
export declare function resolveLocalPublicFile(storedName: string): string | null;
export declare function saveLocalCareerResume(input: {
    buffer: Buffer;
    organizationId: string;
    filename: string;
    mimeType: string;
}): Promise<{
    publicId: string;
    fileUrl: string;
    fileName: string;
}>;
