import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import useAuth from '../../hooks/useAuth'
import { imageUpload } from '../../api/utils'
import toast from 'react-hot-toast'
import { TbFidgetSpinner } from 'react-icons/tb'


const UpdateProfileModal = ({ modalHandler, closeModal, isOpen }) => {

    const { updateUserProfile, loading } = useAuth()


    const handleSubmit = async event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
      
        const image = form.image.files[0];//index 0 bz only one item of the file should be selected
        try {
            //Upload Image
            const imageData = await imageUpload(image);

            await updateUserProfile(name, imageData?.data?.display_url);
           
            toast.success('Profile update successful');

            //closing after successful
            modalHandler()

        } catch (err) {
            toast.error(err?.message);
        }

    }
    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Update Profile information
                                </Dialog.Title>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-400'>
                                        Please provide name and profile to update
                                    </p>
                                </div>
                                <hr className='mt-8 ' />
                                <form
                                    onSubmit={handleSubmit}
                                    noValidate=''
                                    action=''
                                    className='space-y-6 ng-untouched ng-pristine ng-valid'
                                >
                                    <div className='space-y-4'>
                                        <div>
                                            <label htmlFor='email' className='block mb-2 text-sm'>
                                                Name
                                            </label>
                                            <input
                                                required
                                                type='text'
                                                name='name'
                                                id='name'
                                                placeholder='Enter Your Name Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-indigo-500 bg-gray-200 text-gray-900'
                                                data-temp-mail-org='0'
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor='image' className='block mb-2 text-sm'>
                                                Select Image:
                                            </label>
                                            <input
                                                required
                                                type='file'
                                                id='image'
                                                name='image'
                                                accept='image/*'
                                            />
                                        </div>
                                    </div>

                                    {/* <div>
                                        <button
                                            type='submit'
                                            className='bg-indigo-500 w-full rounded-md py-3 text-white'
                                        >
                                            {
                                                loading
                                                    ?
                                                    (<TbFidgetSpinner className='animate-spin mx-auto text-2xl' />)
                                                    :
                                                    ('Update')
                                            }
                                        </button>
                                    </div> */}
                                    <div className='flex mt-2 justify-around'>
                                        <button
                                            type='submit'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                        // onClick={modalHandler}
                                        >
                                            {
                                                loading
                                                    ?
                                                    (<TbFidgetSpinner className='animate-spin mx-auto text-2xl' />)
                                                    :
                                                    ('Update')
                                            }
                                        </button>
                                        <button
                                            type='button'
                                            className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                                            onClick={closeModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

export default UpdateProfileModal;