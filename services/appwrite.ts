import { Client, Databases, ID, Query } from "react-native-appwrite";

// track the searches made by a user

// define our environment variables
const DATABASE_ID = process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!; // '!' tells typescruot that we know this value will be there
const COLLECTION_ID = process.env.EXPO_PUBLIC_APPWRITE_COLLECTION_ID!;

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject(process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!);

const database = new Databases(client);

export const updateSearchCount = async(query: string, movie:Movie) => {
    try {
    const result = await database.listDocuments(DATABASE_ID, COLLECTION_ID, [Query.equal('searchTerm', query)
    ]);

    if(result.documents.length > 0) {
        const existingMovie = result.documents[0];

        await database.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            existingMovie.$id,
            {
                count: existingMovie.count + 1
            }
        )
    } else {
        await database.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(), // generates a unique ID for the new document
            {
                searchTerm: query,
                movie_id: movie.id, // assuming movie has an id field
                count: 1,
                title: movie.title,
                poster_url: `https://image.tmdb.org/t/p/w500${movie.poster_path}` // assuming movie has a poster_path field
            })
    }
    } catch (error) {
        console.error(error);
        throw error; // rethrow the error to handle it in the calling function
    }
}