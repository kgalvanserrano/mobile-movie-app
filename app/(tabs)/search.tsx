import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { icons } from '@/constants/icons';
import { images } from '@/constants/images';
import { fetchMovies } from '@/services/api';
import { updateSearchCount } from '@/services/appwrite';
import useFetch from '@/services/useFetch';
import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, Text, View } from 'react-native';


const search = () => {

  const [searchQuery, setSearchQuery] = useState('');
    
  const { data: movies, 
    loading, 
    error,
    refetch:loadMovies,
    reset
    } = useFetch(() => fetchMovies({ query: searchQuery }), false); //set 2nd argument to false if you don't want to auto fetch on mount, otherwise movie cards will not show up on first render

    useEffect(() => {
      const timeoutID = setTimeout(async () => {
        if(searchQuery.trim()) {
          await loadMovies();
        } else {
            reset()
        }
      }, 500) //debounce the search input to avoid too many requests

      return () => clearTimeout(timeoutID); //cleanup function to clear the timeout
    }, [searchQuery])

    useEffect(() => {
      if(movies?.length > 0 && movies?.[0]) {
        updateSearchCount(searchQuery, movies[0]);
      }
    }, [movies]);

  return (
    <View className='flex-1 bg-primary'>
      <Image source={images.bg} className='flex-1 absolute w-full z-0' resizeMode="cover"/>

      <FlatList 
        data={movies} 
        renderItem={({ item }) => <MovieCard {... item }/>}
        keyExtractor={(item) => item.id.toString()}
        className='px-5'
        numColumns={3}
        columnWrapperStyle={{ 
          justifyContent: 'center', 
          gap: 16,
          marginVertical: 16,
        }}
        contentContainerStyle={{ paddingBottom: 100}}
        ListHeaderComponent={
          <>
            <View className='w-full flex-row justify-center mt-20 items-center'>
              <Image source={icons.logo} className='w-12 h-10'/>
            </View>

            <View className='my-5'>
              <SearchBar 
              placeholder='Search for a movie' 
              value={searchQuery}
              onChangeText={(text: string) => setSearchQuery(text)}
              />
            </View>

            {loading && (
              <ActivityIndicator size="large" color="#000ff" className='my-3'/>
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">
                Error:"{error.message}"
              </Text>
            )}

            {!loading && !error && searchQuery.trim() && movies?.length > 0 && (
              <Text className='text-xl text-white font-bold'>
                Search Results for {''}
                <Text className='text-accent'>
                  {searchQuery}
                </Text>
              </Text>
            )}
          </>
        }
        ListEmptyComponent={
          !loading && !error ? (
            <View className='mt-10 px-5'>
              <Text className='text-center text-gray-500'>
                {searchQuery.trim() ? 
                  `No movies found` : 'Search for a movie'}
              </Text>
            </View>
          ) : null
        }
      />
    </View>
  )
}

export default search