﻿//------------------------------------------------------------------------------
// <auto-generated>
//     Этот код создан программой.
//     Исполняемая версия:4.0.30319.42000
//
//     Изменения в этом файле могут привести к неправильной работе и будут потеряны в случае
//     повторной генерации кода.
// </auto-generated>
//------------------------------------------------------------------------------

namespace TenisApp
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Challenger.
    /// </summary>
    // *** Start programmer edit section *** (Challenger CustomAttributes)

    // *** End programmer edit section *** (Challenger CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("bpa_ChallengerE", new string[] {
            "Player as \'Player\'",
            "Player.LastName as \'Last name\'"}, Hidden=new string[] {
            "Player.LastName"})]
    [MasterViewDefineAttribute("bpa_ChallengerE", "Player", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "LastName")]
    [View("ChallengerE", new string[] {
            "Player.LastName",
            "Player.FirstName",
            "Player.Rating",
            "Player"})]
    [MasterViewDefineAttribute("ChallengerE", "Player", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "LastName")]
    public class Challenger : ICSSoft.STORMNET.DataObject
    {
        
        private TenisApp.Player fPlayer;
        
        private TenisApp.Tournament fTournament;
        
        // *** Start programmer edit section *** (Challenger CustomMembers)

        // *** End programmer edit section *** (Challenger CustomMembers)

        
        /// <summary>
        /// Challenger.
        /// </summary>
        // *** Start programmer edit section *** (Challenger.Player CustomAttributes)

        // *** End programmer edit section *** (Challenger.Player CustomAttributes)
        [PropertyStorage(new string[] {
                "Player"})]
        [NotNull()]
        public virtual TenisApp.Player Player
        {
            get
            {
                // *** Start programmer edit section *** (Challenger.Player Get start)

                // *** End programmer edit section *** (Challenger.Player Get start)
                TenisApp.Player result = this.fPlayer;
                // *** Start programmer edit section *** (Challenger.Player Get end)

                // *** End programmer edit section *** (Challenger.Player Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Challenger.Player Set start)

                // *** End programmer edit section *** (Challenger.Player Set start)
                this.fPlayer = value;
                // *** Start programmer edit section *** (Challenger.Player Set end)

                // *** End programmer edit section *** (Challenger.Player Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку TenisApp.Tournament.
        /// </summary>
        // *** Start programmer edit section *** (Challenger.Tournament CustomAttributes)

        // *** End programmer edit section *** (Challenger.Tournament CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Tournament"})]
        public virtual TenisApp.Tournament Tournament
        {
            get
            {
                // *** Start programmer edit section *** (Challenger.Tournament Get start)

                // *** End programmer edit section *** (Challenger.Tournament Get start)
                TenisApp.Tournament result = this.fTournament;
                // *** Start programmer edit section *** (Challenger.Tournament Get end)

                // *** End programmer edit section *** (Challenger.Tournament Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Challenger.Tournament Set start)

                // *** End programmer edit section *** (Challenger.Tournament Set start)
                this.fTournament = value;
                // *** Start programmer edit section *** (Challenger.Tournament Set end)

                // *** End programmer edit section *** (Challenger.Tournament Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "bpa_ChallengerE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View bpa_ChallengerE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("bpa_ChallengerE", typeof(TenisApp.Challenger));
                }
            }
            
            /// <summary>
            /// "ChallengerE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ChallengerE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ChallengerE", typeof(TenisApp.Challenger));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Challenger.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfChallenger CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfChallenger CustomAttributes)
    public class DetailArrayOfChallenger : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (TenisApp.DetailArrayOfChallenger members)

        // *** End programmer edit section *** (TenisApp.DetailArrayOfChallenger members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Challenger by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Challenger.
        /// </summary>
        public DetailArrayOfChallenger(TenisApp.Tournament fTournament) : 
                base(typeof(Challenger), ((ICSSoft.STORMNET.DataObject)(fTournament)))
        {
        }
        
        public TenisApp.Challenger this[int index]
        {
            get
            {
                return ((TenisApp.Challenger)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(TenisApp.Challenger dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
