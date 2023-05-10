<script lang='ts'>

let fileInput;
let files;
let picture;
let pictureData;

function parseBase64(image){
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = e => {
        picture = e.target?.result;
        const data = picture.split(',');
        pictureData = data[1];
    }
}

</script>

<h1>Welcome to Consulting Ninja</h1>
<p>Visit <a href="https://www.youtube.com/@ConsultingNinja/featured">@ConsultingNinja</a> for more great videos!</p>

<form method="post" action="?/uploadImage">
    <div class="layout-option-upload">
        {#if pictureData}
            <p class="preview">Preview</p>
            <img class='image' src={picture} alt="File-To-Upload"/>
        {:else if !pictureData}
            <img id="no-image"  alt="File-To-Upload"/>
        {/if}
        <input type="hidden" bind:value={pictureData} name="pictureData" />
        <input bind:this={fileInput} class="hidden" id="pictureName" name="pictureName" type="file" accept=".png,.jpg" bind:files  on:change={() => parseBase64(files[0])}/>
        <div>
            {#if pictureData}
            <button type="button"  on:click={ () => fileInput.click()  }>Change</button>
            <button type="submit" >Upload</button>
            {:else}
            <button type="button"  on:click={ () => fileInput.click()  }>Upload</button>
            {/if}
        </div>
    </div>
</form>



<style>
    a{
        text-decoration: none;
        color:#1238c4;
        padding:5px;
    }
    a:hover{
        text-decoration: underline;
        background-color: rgba(18, 56, 196,0.1);
        border-radius: 5px;
        padding:5px;
    }
    button{
        color: #000000;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        border: 0;

    }
    button:hover{
        cursor: pointer;
        opacity: .8;
        box-shadow: inset 2px #242424;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
        outline: 2px solid ;
    }
    ol{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

    }
    li{
        max-width: 300px;
    }
    .hidden {
        display: none;
    }
    .image{
        height: 128px;
        width: auto;
        margin-bottom: .5em;
    }
</style>