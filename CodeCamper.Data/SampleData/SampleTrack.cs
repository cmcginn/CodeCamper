﻿using System.Collections.Generic;
using System.Linq;

namespace CodeCamper.Data.SampleData
{
    public class SampleTrack
    {
        public static List<SampleTrack> Tracks = 
            new List<SampleTrack>
                {
                   new SampleTrack("Windows 8", "WIN","Windows", "XAML", "WinRT", "C++", "C#", "VB","HTML5", "Metro"),
                   new SampleTrack("JavaScript", "JVS","JavaScript", "jQuery", "Knockout","JsRender", "MVVM","HTML5", "SPA", "Amplify", "Underscore", "Backbone", "Web"),
                   new SampleTrack("CSS", "CSS","CSS3", "CSS", "Responsive Design", "Bootstrap", "Media Queries", "Web"),
                   new SampleTrack("ASP.NET", "ASP","MVC","Web Matrix","HTML5","SignalR", "Web Forms", "Web", "Web API"),
                   new SampleTrack(".NET", "NET","Memory", "Debugging","WCF", "Silverlight", "WPF", "XAML", "Web"),
                   new SampleTrack("Data", "DAT","Entity Framework", "SQL Server", "OData", "BI", "Oracle", "ORM"),
                   new SampleTrack("Mobile", "MOB","Mobile","WP7", "PhoneGap", "Android", "iPad", "iOS", "Xamarin","Kinect", "XNA", "Web"),
                   new SampleTrack("Cloud", "CLD","Cloud", "Node","Azure","Amazon", "EC2", "Service Bus", "SkyDrive", "Web"),
                   new SampleTrack("Practices", "PRC","Practices", "TFS", "Agility","TDD","Testing", "Mocks", "Scrum", "Lean", "Web"),
                   new SampleTrack("Design", "DSN","Design", "Animation","3D","UX", "Metro", "SketchFlow"),
                };

        public static List<string> Names { get { return Tracks.Select(t => t.Name).ToList(); } }
        public static List<string> CodeRoots { get { return Tracks.Select(t => t.CodeRoot).ToList(); } }

        public static SampleTrack GetByName(string trackName)
        {
            return Tracks.First(t => t.Name == trackName);
        }

        public static string GetCodeRoot(string trackName)
        {
            return Tracks.Where(t => t.Name == trackName).Select(t => t.CodeRoot).First();
        }

        public static List<string> GetTags(string trackName = null)
        {
            trackName = trackName ?? string.Empty;
            var trackInfo = Tracks.FirstOrDefault(t => t.Name == trackName);
            if (trackInfo != null) return trackInfo.Tags;
            return Tracks.SelectMany(t => t.Tags).ToList();
        }

        public SampleTrack(string name, string codeRoot, params string[] tags)
        {
            Name = name;
            CodeRoot = codeRoot;
            Tags = tags.ToList();
        }

        public string Name { get; set; }
        public string CodeRoot { get; set; }
        public List<string> Tags { get; set; }

    }
}