interface IEmojiProps {
     children:any
}

export function Emoji({children}:IEmojiProps){
    return(
<div className="w-16 h-16 mx-auto bg-gray-200 rounded-full flex items-center justify-center mb-4">
                  <span className="text-3xl">{children}</span>
                </div>
    );
}